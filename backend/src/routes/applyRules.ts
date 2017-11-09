/**
 *  this function apply the rules as a "post processing" after the basket is fetched
 *  from the database
 * 
 * @param basket
 */
const FRUIT_TEA = 'FR1';
const STRAWBERRIES = 'SR1';

export const applyRules = (basket: any) => {
    return basket.map((item: any) => {
        if(item.productCode === FRUIT_TEA){
            item.quantity++; //buy one - get 1 free
            item.promotion = {
                type: 'buy one get one free!',
                free: 1
            }
        }
        if(item.productCode === STRAWBERRIES && item.quantity > 3){
            item.price = 450; //encoding multiplied 100
            item.promotion = {
                type: 'bulk purchase, discount price',
                newPrice: 450
            }
        }

        return item;
    })
}