/** 
 * 利用闭包缓存值操作
 * @param {Function} fn 操作函数（函数返回值将会被缓存）
 * @return {Function} 返回取值函数（参数将会被传递给操作函数）
 */
export default fn => {
  let cache;
  let virgin = true;
  return (...arg) => {
    if(virgin){
      virgin = false;
      cache = fn(...arg);
    }
    return cache;
  };
};