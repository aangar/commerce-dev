const priceFiltered = (lowerBound, array, priceData) => {
    let re = [];
    if (lowerBound) {
        switch (priceData[1] === '') {
            case true: {
                for (let i of array) {
                    if (i.price >= priceData[0]) {
                        re.push(i);
                    } else { }
                }
            }
                break;
            case false: {
                for (let i of array) {
                    if (i.price <= priceData[1] && i.price >= priceData[0]) {
                        re.push(i);
                    } else { }
                }
            }
                break;
        }

    } else {
        for (let i of array) {
            if (i.price <= priceData[1]) {
                re.push(i);
            } else { }
        }
    }
    return re;
}

const sizeFilter = (size, array1) => {
    let filter = [];
    if (size !== 'noval' && size !== '') {
        for (let i of array1) {
            if (i.size === size) {
                filter.push(i);
            }
        }
        return filter;
    } else {
        return array1;
    }
}

const brandFilter = (brand, array2) => {
    let filter = [];
    switch (typeof brand) {
        case 'string': {
            for (let i of array2) {
                if (i.brand === brand) {
                    filter.push(i);
                }

            }
        }
            break;
        case 'object': {
            for (let b of brand) {
                for (let i of array2) {
                    if (i.brand === b) {
                        filter.push(i);
                    }
                }
            }

        }
            break;
        case 'undefined': {
            filter = array2;
        }
            break;
    }
    return filter;
}

const colorFilter = (color, array3) => {
    let filter = [];
    switch (typeof color) {
        case 'string': {
            for (let i of array3) {
                if (i.color === color) {
                    filter.push(i);
                }
            }
        }
            break;
        case 'object': {
            for (let c of color) {
                for (let i of array3) {
                    if (i.color === c) {
                        filter.push(i);
                    }
                }
            }
        }
            break;
        case 'undefined': {
            filter = array3;
        }
            break;
    }
    return filter;
}

const genderFiltered = (gender, array) =>{
    let filter = [];

    if(gender !== 'noval' && gender !== '') {
        for(let a of array){
            if(a.gender === gender){
                filter.push(a);
            }
        }
        return filter;
    }else{
        return array;
    }
}

module.exports.filterResults = (results, price, size, brand, color , gender) => {
    let toFilter = results;

    if (price[1] === '' && parseInt(price[0]) === 0) {
        const pass1 = genderFiltered(gender , toFilter);
        toFilter = pass1;
        const pass2 = sizeFilter(size, toFilter);
        toFilter = pass2;
        const pass3 = brandFilter(brand, toFilter);
        toFilter = pass3;
        const pass4 = colorFilter(color, toFilter);
        toFilter = pass4;

    } else if (price[0] === '') {
        const vals = [0, price[1]];
        toFilter = priceFiltered(true, toFilter, vals);
        const pass2 = sizeFilter(size, toFilter);
        toFilter = pass2;
        const pass1 = genderFiltered(gender , toFilter);
        toFilter = pass1;
        const pass3 = brandFilter(brand, toFilter);
        toFilter = pass3;
        const pass4 = colorFilter(color, toFilter);
        toFilter = pass4;

    } else {
        if (parseInt(price[0]) >= 0) {
            toFilter = priceFiltered(true, toFilter, price);
            const pass2 = sizeFilter(size, toFilter);
            toFilter = pass2;
            const pass1 = genderFiltered(gender , toFilter);
            toFilter = pass1;
            const pass3 = brandFilter(brand, toFilter);
            toFilter = pass3;
            const pass4 = colorFilter(color, toFilter);
            toFilter = pass4;

        } else {
            toFilter = priceFiltered(false, results, price);
            const pass2 = sizeFilter(size, toFilter);
            toFilter = pass2;
            const pass1 = genderFiltered(gender , toFilter);
            toFilter = pass1;
            const pass3 = brandFilter(brand, toFilter);
            toFilter = pass3;
            const pass4 = colorFilter(color, toFilter);
            toFilter = pass4;

        }
    }
    return toFilter;
}