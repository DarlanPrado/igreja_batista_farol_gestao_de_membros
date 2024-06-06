export default interface HttpResponse {
    code: number,
    status: string,
    message: string,
    data?: object,
}