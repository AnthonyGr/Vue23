/**
 * Отправляет запрос на
 * @async
 * @param {String} url - url without '/api/'
 * @param {Object} options default method - GET
 * @returns {Promise<{data, success: boolean, error: (*|string)}>} Promise<Response>
 */
export default async function Fetch(url, options = {}) {

    if (!url) throw new Error("Не передан url в метод отправки запроса")

    let response = await fetch("https://dummyjson.com/" + url, options)
    if (response.ok) {
        try {
            let obj = await response.json()
            return {
                obj
            }
        } catch (e) {
            console.error("Ошибка при попытке распарсить ответ - ", {
                errorMessage: e.message,
                requestUrl: url,
                requestOptions: options,
            })
            return {
                success: false,
                data: null,
                message: 'Ошибка',
            }
        }
    } else {
        try {
            let errorData = await response.json()
            console.error(`Ошибка в запросе к /api/${url} `, {
                response: errorData,
                requestOptions: options,
            })
            return {
                success: errorData['success'],
                data: errorData['data'] || null,
                message: errorData['message']
            }
        } catch (e) {
            console.error("Ошибка при попытке распарсить ответ - ", {
                errorMessage: e.message,
                requestUrl: url,
                requestOptions: options,
            })
            return {
                success: false,
                data: null,
                // Корректная ошибка всегда последний элемент массива
                message: 'Ошибка',
            }
        }
    }

}