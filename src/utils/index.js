import 'intl';
import 'intl/locale-data/jsonp/en';

export const formatNumber = (number)=>{
    return Intl.NumberFormat().format(number);
}