import _ from 'lodash';

export function paginate(list, pageNumber, itemsForPage){
    const startIndex = (pageNumber -1)*itemsForPage;
    return _(list).slice(startIndex).take(itemsForPage).value();
}