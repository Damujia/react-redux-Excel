import {get} from './axios'
export default{
  login(params){
    return get('login', params)
  }
}