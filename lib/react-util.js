
/**
 * React utilities for use within userscripts.
 * Version 0.1
 */

/**
 * @typedef {Object} ReactElement
 * @property {symbol} $$typeof
 * @property {unknown} _owner
 * @property {unknown} key
 * @property {ReactProps} props
 * @property {unknown} ref
 * @property {Function} type
 */

/**
 * @typedef {Object} ReactProps
 * @property {(ReactElement[] | null)[] | ReactElement | Function | undefined} children
 * @property {[key: string]: any}
 */

/**
 * Checks if a prop exists.
 * @param {Element} element
 * @param {string} propName
 * @returns {boolean}
 */
function reactPropExists(element, propName) {
    const key = Object.keys(element).find(e => e.startsWith("__reactProps"))

    if (!key)
        console.error(`Element has no react props: `, element)

    const reactProps = element[key]
    return _getReactPropByName(reactProps, propName)[0]
}


/**
 * Tries to get a react prop by name.
 * @template T
 * @param {string} rootSelector
 * @param {Element} element
 * @param {string} propName
 * @param {boolean} quiet
 * @returns {T | null}
 */
function getReactPropByName(rootSelector, element, propName, quiet = false) {
    const key = Object.keys(element).find(e => e.startsWith("__reactProps"))

    if (!key) {
        if (!quiet)
            console.error(`Element has no react props: `, element)
        return null
    }

    // @ts-ignore
    const rootElement = document.querySelector(rootSelector)
    const root = rootElement._reactRootContainer._internalRoot.current

    /**
     * @type {[boolean, T | null]}
     */
    let result = [false, null]
    for (let component of recursiveComponents2(root, element)) {
        result = _getReactPropByName(component.pendingProps, propName)
        if (result[0])
            break

        result = _getReactPropByName(component.props || [], propName)
        if (result[0])
            break
    }

    if (!result[0] && !quiet)
        console.error(`Error getting react prop "${propName}" from element: `, element)

    return result[1]

    function* recursiveComponents2(instance, element) {
        if (instance.stateNode == element)
            yield instance
        if (instance.sibling)
            yield* recursiveComponents2(instance.sibling, element)
        if (instance.child)
            yield* recursiveComponents2(instance.child, element)
    }
}


/**
 * @template T
 * @param {string} rootSelector
 * @param {string} propName
 * @param {boolean} quiet
 * @returns {T | null}
 */
function getRootReactPropByName(rootSelector, propName, quiet = false) {
    const rootElement = document.querySelector(rootSelector)

    // @ts-ignore
    const component = rootElement._reactRootContainer._internalRoot.current.child

    /**
     * @type {[boolean, T | null]}
     */
    let result = [false, null]
    result = _getReactPropByName(component.pendingProps, propName)

    if (!result[0])
        result = _getReactPropByName(component.props || [], propName)

    if (!result[0] && !quiet)
        console.error(`Error getting react prop "${propName}" from element:`, rootElement, component)

    return result[1]
}


/**
 * Tries to get a react prop by name.
 * @template T
 * @param {ReactProps} reactProps
 * @param {string} propName
 * @param {boolean} quiet
 * @returns {[boolean, T | null]}
 */
function _getReactPropByName(reactProps, propName) {
    /**
     * @type {[boolean, T | null]}
     */
    const emptyResult = [false, null]
    if (!reactProps)
        return emptyResult

    if (Object.keys(reactProps).includes(propName))
        return [true, reactProps[propName]]

    if (!reactProps.children || typeof reactProps.children == "function")
        return emptyResult

    if (!Array.isArray(reactProps.children))
        return _getReactPropByName(reactProps.children.props, propName)

    for (let e of reactProps.children.flat().filter(e => !!e) || []) {
        const result = _getReactPropByName(e.props, propName)
        if (result[0])
            return result
    }

    return emptyResult
}
