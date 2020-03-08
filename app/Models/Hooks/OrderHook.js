'use strict'

const OrderHook = exports = module.exports = {}

OrderHook.updateValues = async model => {

    model.$siteLoaded.subtotal = await model.items().getSum('subtotal')
    model.$siteLoaded.qty_items = await model.items.getSum('quantity')
    model.$siteLoaded.discount = await model.discounts.getSum('discount')
    model.total = model.$siteLoaded.subtotal - model.$siteLoaded.discount

}

OrderHook.updateCollectionValues = async models => {
    for (let model of models) {
        model = await OrderHook.updateValues(model)
    }
}