var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url: 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: '_blank',
        price: 20000,
        sale: 0.5,
        selectedProduct: 0,
        cartNumber: 0,
        listProductDetail: [
            {
                image: './images/black.jpg',
                quantity: 0,
                textColor: 'Màu Đen'
            }, {
                image: './images/blue.jpg',
                quantity: 8,
                textColor: 'Màu Xanh'
            }, {
                image: './images/red.jpg',
                quantity: 2,
                textColor: 'Màu Đỏ'
            }, 
        ],
        
        listDesc: [
            'Chất liệu: polyester và thun',
            'Thoát mồ hôi tốt',
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
            'Chất liệu: polyester và thun'
        ],
        description: '<p>M&ocirc; tả: &Aacute;o thun cổ tr&ograve;n thể thao Hiye chuy&ecirc;n được may từ chất liệu nilon tho&aacute;ng m&aacute;t v&agrave; tho&aacute;t mồ h&ocirc;i tốt, kết hợp th&ecirc;m sợi thun tạo độ co gi&atilde;n gi&uacute;p người ti&ecirc;u d&ugrave;ng thoải m&aacute;i khi mặc</p> '
    },
    methods: {
        handleClickColor(e, index) {
            this.selectedProduct = index;
        },
        classActive(index) {
            return {
                active: this.selectedProduct === index
            }
        },
        handleAddToCart(e) {
            // const totalQuantity = this.listProductDetail.reduce(function(result, currentValue) {
            //     return result + currentValue.quantity;
            // }, 0);
            if(this.cartNumber + 1 > this.getProduct.quantity) {
                alert('Số lượng không đủ');
            } else {
                this.cartNumber = this.cartNumber + 1;
            }
        }
    },
    computed: {
        formatOriginalPrice() {
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        formatFinalPrice() {
            var number = this.price - this.sale * this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        getProduct() {
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        }
    }
});
