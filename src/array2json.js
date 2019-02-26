import noop from './noop.js';

/** 
 * 将数组数据转成对象模式，以传入的uuid值所对应的属性值作为key，值为数据项（如果数据项非object类型，则将会使用数据项做key，value为true）
 * 
 * @param {Array} data 数据
 * @param {String} [uuid='id'] 设置哪个属性值为key
 * @param {Function} [filter=noop] 设置过滤
 */
export default (data, uuid = 'id', filter = noop) => {
  const json = {};
  const is_fun = typeof filter == 'function' && filter !== noop;
  data.forEach((item, index) => {
    if((is_fun ? filter(item, index) : true) !== false){
      if(typeof item == 'object'){
        json[item[uuid]] = item;
      } else{
        json[item] = true;
      }
    }
  });
  return json;
};