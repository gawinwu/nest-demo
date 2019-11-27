// 函数中间件
export function logger(req, res, next) {
    console.log('函数中间件');
    next()
}