// import moment from 'moment';
// import Select from "react-select";
// import AsyncSelect from 'react-select/async';
// import CreatableSelect from 'react-select/creatable';
// import { toast } from "react-toastify";
// import { customSelectStyles } from "./helpers";

// const dateFormat = "DD-MM-yyyy";
// const timeFormat = "hh:mm:ss a";
// const _USER_ = 'user'

// export const formatDate = (value) => {
//     return moment(value).format(dateFormat);
// }

// export const formatDateByFormat = (value, format) => {
//     return moment(value).format(format);
// }

// export function addDays(date, days) {
//     var result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result;
// }

// export const formatTime = (value) => {
//     // return this.datePipe.transform(value,this.timeFormat);
//     let time = value.split(':');
//     let formattedTime = "";
//     let time_0 = parseInt(time[0]);
//     let time_1 = parseInt(time[1]);
//     //console.log(time);
//     if (time[0] <= 12)
//         formattedTime = "" + time_0;
//     else
//         formattedTime = time_0 - 12;
    
//     formattedTime = formattedTime + ":" + time_1;

//     if (time_0 >= 12 && time_1 >= 0)
//         formattedTime = formattedTime + " PM";
//     else
//         formattedTime = formattedTime + " AM";

//     //console.log("formattedTime : ", formattedTime);
//     return formattedTime;
// }

// export const formatDateWithTime = (value) => {
//     const format = dateFormat + " " + timeFormat;
//     return moment(value).format(format);
// }

// export const getDropDownListFromLabels = (object) => {
//     let object_list = [];
//     Object.keys(object).map(key => {
//         let obj = {
//             label: object[key],
//             value: key
//         }
//         object_list.push(obj)
//     })
//     return object_list;
// }

// export const getPlaceholder = (loading = true, title) => {
//     if (loading) {
//         return <div className="dropLoader"><i className="fa fa-spinner fa-pulse"></i></div>
//     } else {
//         return title
//     }
// }

// export const isInvalid = (invalid, key) => {
//     if (invalid) {
//         return invalid.includes(key)
//     } else {
//         return false
//     }
// }

// export const DropDownAsync = (onInputChange = () => { }, options = () => { }, loading, value, placeHolder, onChange = () => { }, multi = false, clear = false, disable = false, key = "", invalid = []) => {
//     return (<AsyncSelect name={key} isMulti={multi} isClearable={clear} styles={customSelectStyles} value={((value !== undefined) ? value : null)} isDisabled={(loading) ? true : ((options) ? disable : true)} placeholder={getPlaceholder(loading, placeHolder)} onChange={onChange} className={(isInvalid(invalid, key) ? 'is-invalid' : '')} classNamePrefix="select" loadOptions={options} onInputChange={onInputChange} cacheOptions defaultOptions />)
// }

// export const DropDown = (options, loading, value, placeHolder, onChange = () => { }, multi = false, clear = false, disable = false, key = "", invalid = []) => {
//     return (<Select name={key} isMulti={multi} isClearable={clear} styles={customSelectStyles} value={((value !== undefined) ? value : null)} isDisabled={(loading) ? true : ((options) ? disable : true)} placeholder={getPlaceholder(loading, placeHolder)} onChange={onChange} className={(isInvalid(invalid, key) ? 'is-invalid' : '')} classNamePrefix="select" options={options} />)
// }

// export const DropDownCreatable = (options, loading, value, placeHolder, onChange = () => { }, multi = false, clear = false, disable = false, key = "", invalid = []) => {
//     return (<CreatableSelect name={key} isMulti={multi} isClearable={clear} styles={customSelectStyles} value={value} isDisabled={(loading) ? true : ((options) ? disable : true)} placeholder={getPlaceholder(loading, placeHolder)} onChange={onChange} className={(isInvalid(invalid, key) ? 'is-invalid' : '')} classNamePrefix="select" options={options} />)
// }

// export const getSelectValue = (option) => {
//     if (option) {
//         return option.value
//     } else {
//         return null
//     }
// }

// export const getSelectValueMulti = (option) => {
//     let op = []
//     if (option) {
//         option.forEach(d => {
//             op.push(d.value)
//         })
//         return op;
//     } else {
//         return null
//     }
// }

// export const setSelectOption = (array = [], name = null, id = null, label = null, extra = null) => {
//     let op = []
//     if (array !== null) {
//         if (typeof array === "object" && array.length > 0) {
//             array.forEach(d => {
//                 if (name && id) {
//                     if (label) {
//                         op.push({
//                             label: label[d[name]] + (extra && d[extra] ? " " + label[d[extra]] : ''),
//                             value: d[id]
//                         })
//                     } else {
//                         op.push({
//                             label: d[name] + (extra && d[extra] ? " " + d[extra] : ''),
//                             value: d[id]
//                         })
//                     }
//                 } else {
//                     if (label) {
//                         op.push({
//                             label: label[d],
//                             value: d
//                         })
//                     } else {
//                         op.push({
//                             label: d,
//                             value: d
//                         })
//                     }
//                 }
//             })
//         }
//     }
//     return op
// }

// export const getOptionsFromAttributes = (attributes) => {
//     let options = []
//     if (attributes) {
//         attributes.forEach((a, i) => {
//             let ops = []
//             if (a.bucket_group !== undefined) {
//                 a.bucket_group.bucket_group_attributes.forEach((d, x) => {
//                     ops.push({
//                         value: d,
//                         label: d.name
//                     })
//                 })
//             }
//             options.push(ops)
//         })
//     }
//     cLog(options)
//     return options
// }

// export const calculate_age = (dob1) => {
//     var today = new Date();
//     var birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
//     var age_now = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age_now--;
//     }
//     //console.log(age_now);
//     return age_now;
// }

// export const ErrToast = (
//     msg, 
//     time, 
//     hideProgressBar = true,
//     draggable = true,
//     pauseOnHover = true,
//     progress = undefined,
//     closeOnClick = true,
//     position = "top-right"
// ) => {
//     toast.error(msg, {
//         position: position,
//         autoClose: time,
//         hideProgressBar: hideProgressBar,
//         closeOnClick: closeOnClick,
//         pauseOnHover: pauseOnHover,
//         draggable: draggable,
//         progress: progress,
//     })
// }

// export const SuccessToast = (
//     msg, 
//     time, 
//     hideProgressBar = true,
//     draggable = true,
//     pauseOnHover = true,
//     progress = undefined,
//     closeOnClick = true,
//     position = "top-right"
// ) => {
//     toast.success(msg, {
//         position: position,
//         autoClose: time,
//         hideProgressBar: hideProgressBar,
//         closeOnClick: closeOnClick,
//         pauseOnHover: pauseOnHover,
//         draggable: draggable,
//         progress: progress,
//     })
// }

// export const setTitle = (title = '') => {
//     const el = document.querySelector('title');
//     const elText = 'Kishori'
//     el.innerText = `${title} | ${elText}`;
// };

// export const setDescription = desc => {
//     const el = document.querySelector("meta[name='description']");
//     el.setAttribute('content', desc)
// }

// // log only on development
// export const cLog = (log, log2 = "") => {
//     if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//         console.log(log, log2);
//     }
// }

// function update(value){
//     let prevData = JSON.parse(sessionStorage.getItem(_USER_));
//     Object.keys(value).forEach(function(val, key){
//          prevData[val] = value[val];
//     })
//     sessionStorage.setItem(_USER_, JSON.stringify(prevData));
// }

// export const isSignedIn = () => {
//     const _user_ = sessionStorage.getItem(_USER_) ? true : false;
//     console.log('usre', _user_)
//     return _user_ ? 1 : 0
// }

// export const setSessionStorage = (token, email, uid = 'willUpdatelater') => {
//     const user = {
//         authToken: token,
//         email: email,
//         uid: uid
//     }
//     sessionStorage.setItem(_USER_, JSON.stringify(user))
// }

// export const addUidSessionStorage = (uid) => {
//     update({ uid: uid })
// }

// export const getSessionStorage = () => {
//     const _user_ = JSON.parse(sessionStorage.getItem(_USER_))
//     console.log('user', _user_)
//     return _user_
// }

// export const jsonToArray = (JS_OBJ) => {
//     let res = [];
      
//     for(let i in JS_OBJ)
//         res.push(i);
    
//     if(res.length === 0){
//         res.push('No Data')
//     }
//     return res
// }

// export const isValidMail = (email='') => {
//     const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return email.match(format)
// }