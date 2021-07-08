export default {
    decimal: function(val){
        return val * 0.01
    },
    formatPrice: function(price){
        var formatter = new Intl.NumberFormat('fr-FR', {
              style: 'currency',
              currency: price.currency,
        });

        return formatter.format(price.unit_amount * 0.01); 
    },
	len: function(data){
		switch(typeof data){
			case 'object':
				return Object.keys(data).length
			break

			case 'array':
			case 'string':
				return data.length 
			break

			default:
				return null
			break
		}
	}
}