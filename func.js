/**
    * @param {string} selector
    * @param {HTMLElement} ref
    * @returns {HTMLElement[]}
    */
function get(selector, ref = document) {
    return Array.from(ref.querySelectorAll(selector)).map((e) => {
        e.get = (selector) => window.get(selector, e);
        return e;
    });
}


/**
 * @param {string} tagname
 * @param {object} properties
 * @returns {HTMLElement}
 */
function new_node(tagname, properties = {}) {
    let property_modifier = (obj, properties) => {
        for (let key of Object.keys(properties)) {
            (
                (typeof (obj[key]) === 'object') ?
                    (property_modifier(obj[key], properties[key]))
                    :
                    (obj[key] = properties[key])
            );
        }

        return obj;
    };
    return property_modifier(document.createElement(tagname), properties);
}

/**
 * @param {string} url_file
 * @returns {void}
 * @description Set the pdf file to the iframe
 */
function get_pdf(url_file) {
    get('iframe[title="pdfjs_default_viewer"]')[0].src = url_file;
}