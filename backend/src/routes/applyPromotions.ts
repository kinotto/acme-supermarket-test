const promotions = require('../config/promotions.json');

/**
 *  this function check if any promotion is applicable to the basket 
 * 
 * @param basket
 */
export const applyPromotions = (basket: any) => {
    return basket.map((item: any) => {

        let promo = promotions.find(
            (promotion: any) => promotion.productCode === item.productCode);

        //if promotion can be applied
        if(promo && item.quantity >= promo.rule.quantity){
            item.promotion = promo;
        }

        return item;
    })
}

/**
 * calculate the basket total applying the prices according to the promotions
 * @param basket
 */
export const calculateTotal = (basket: any) => {
    return basket.reduce(
        (sum:any, item:any) => {
            //price could be promotional
            let priceToApply = item.promotion && item.promotion.rule 
                && item.promotion.rule.newPrice 
                ? item.promotion.rule.newPrice 
                : item.price;
            return +(sum + priceToApply * item.quantity);
        }, 0
     );
}