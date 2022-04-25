
// import axios from 'axios';
// import * as endpoints from '../constants/api/endpoints';
import _ from 'lodash';
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const isObjectEmpty = (obj) => {
  for (const key in obj) {
    // needs to refactor
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export const upperCaseFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const formatPhoneText = (str) => {
  /**
   *  Format number to format ' +1(876) 888-8888'
   */
  const cleaned = ('' + str).replace(/\D/g, '');
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    // const intlCode = match[1] ? '+'+match[1] : '';
    return ['(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return str;
};


export const formatTRNText = (str) => {
/**
 *  Format number to format ' 127-888-888'
 */
  const cleaned = ('' + str).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
  if (match) {
    return [match[1], '-', match[2], '-', match[3]].join('');
  }
  return str;
};


export const formatDate = (date) => {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
};

export const sortedArray= (input, property) => {
  // sort by qScore
  const sorted= input.sort((a, b) => (a.qScore < b.qScore) ? 1 : ((b.qScore < a.qScore) ? -1 : 0));
  return Array.from(
      new Set(sorted.map((obj) => obj[property])),
  );
};

export const sortedArrayByDate= (input, property) => {
  // sort by modifiedDate
  const sorted= input.sort((a, b) => (a.modifiedDate < b.modifiedDate) ? 1 : ((b.modifiedDate < a.modifiedDate) ? -1 : 0));
  return Array.from(
      new Set(sorted.map((obj) => obj[property])),
  );
};

export const sortedArrayByScore= (input, property) => {
  // sort by qScore
  const sorted= _.orderBy(input, ['qScore', 'modifiedDate'], ['desc', 'desc'] );
  return Array.from(
      new Set(sorted.map((obj) => obj[property])),
  );
};


export const uniqueAddresses = (addresses) => {
  // compare obj instead of addressLine1
  const result= Array.from(new Set(addresses.map((a) => a.addressLine1)))
      .map((addressLine1) => {
        return addresses.find((a) => a.addressLine1 === addressLine1);
      });
  return result;
};

export const uniquePhone = (phoneNum) => {
  const result= Array.from(new Set(phoneNum.map((a) => a.phoneNumberLFormat)))
      .map((phoneNumberLFormat) => {
        return phoneNum.find((a) => a.phoneNumberLFormat === phoneNumberLFormat);
      });
  return result;
};


export const uniqueEmail = (emailAddr) => {
  const result= Array.from(new Set(emailAddr.map((a) => a.emailAddress)))
      .map((emailAddress) => {
        return emailAddr.find((a) => a.emailAddress === emailAddress);
      });
  return result;
};


export const filterAddress = (addressList) => {
  const addresses = [];
  let homeAddr;
  let workAddr;
  let mailingAddr;
  if (addressList && addressList.length) {
    homeAddr = addressList.filter((address) => address.addressType.toUpperCase() === 'HOME');
    if (homeAddr && homeAddr.length > 1) {
      // qScore for addresses = 0
      // homeAddr.sort((a,b) => (a.qScore > b.qScore) ? 1 : ((b.qScore > a.qScore) ? -1 : 0));
      addresses.push(
          homeAddr.reduce(
              (r, a) =>
            new Date(r.modifiedDate) > new Date(a.modifiedDate) ? r : a,
          ),
      );
    } else if (homeAddr.length === 1) {
      addresses.push(homeAddr[0]);
    }
    workAddr = addressList.filter((address) => address.addressType.toUpperCase() === 'WORK' || address.addressType.toUpperCase() === 'OFFICE' );
    if (workAddr && workAddr.length > 1) {
      addresses.push(
          workAddr.reduce(
              (r, a) =>
            new Date(r.modifiedDate) > new Date(a.modifiedDate) ? r : a,
          ),
      );
    } else if (workAddr.length === 1) {
      addresses.push(workAddr[0]);
    }
    mailingAddr = addressList.filter(
        (address) => address.addressType.toUpperCase() === 'MAILING',
    );
    if (mailingAddr && mailingAddr.length > 1) {
      addresses.push(
          mailingAddr.reduce(
              (r, a) =>
            new Date(r.modifiedDate) > new Date(a.modifiedDate) ? r : a,
          ),
      );
    } else if (mailingAddr.length === 1) {
      addresses.push(mailingAddr[0]);
    }
  }
  return addresses;
};

export const getNestedObject = (nestedObj, pathArr) => {
  return pathArr.reduce(
      (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
      nestedObj,
  );
};

/** Validate person phone number

* @api {post} /PhoneValidation/api/Verify Verify Customer phone number
*
* NB. enpoint will only verify numbers with the prefix ' + 1 876 '
*/

// export const verifyPhone = (number) => {
//   const data = '+1' + number;
//   const options = {
//     auth: {
//       username: 'eimapiuser',
//       password: 'eimuser',
//     },
//   };
//   axios.post(endpoints.VALIDATE_PHONE, data, options)
//       .then((response) => {
//         return response.data.valid;
//       })
//       .catch((error) =>
//         console.log(error)
//       );
// };


/** Validate person trn

* @api {post} /PhoneValidation/api/Verify Verify Customer phone number
*
* NB. enpoint will only verify numbers with the prefix ' + 1 876 '
*/
