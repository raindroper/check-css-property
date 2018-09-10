function cssProperty(attr) {

    const prefix = ['O', 'ms', 'Moz', 'Webkit'],
        length = prefix.length,

        style = document.createElement('i').style;


    cssProperty = function (attr) {

        if (attr in style) {

            return true;

        }

        attr = attr.replace(/^[a-z]/, function (val) {

            return val.toUpperCase();

        });

        console.log('attr', attr)

        let len = length;

        while (len--) {

            if (prefix[len] + attr in style) {

                return true;

            }

        }

        return false;

    };

    return cssProperty(attr);
}

cssProperty('height');