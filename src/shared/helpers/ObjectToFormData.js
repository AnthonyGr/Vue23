/**
 * Формирует FormData из объекта
 * @param {Object} obj
 * @returns {FormData}
 */
export default function ObjectToFormData(obj = {}) {
    const fd = new FormData()
    Object.entries(obj).forEach(([key, value]) => {
        if (Array.isArray(value) || typeof value === 'object') {
            // for (let item of value) {
            //     fd.append(key, item)
            // }
            fd.append(key, JSON.stringify(value))
        } else if (typeof value === 'boolean') {
            fd.append(key, String(Number(value)))
        } else {
            fd.append(key, String(value === null ? '' : value))
        }
    })
    return fd
}
