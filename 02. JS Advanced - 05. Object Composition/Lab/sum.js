function sum() {
    let model = {
        init: function (selector1, selector2, resultSelector) {
            model.num1 = $(selector1);
            model.num2 = $(selector2);
            model.result = $(resultSelector);
        },
        add: function () {
            model.action((a,b)=>a+b);
        },
        subtract: function () {
            model.action((a,b)=>a-b);
        },
        action: function (operation) {
            let val1 = Number(model.num1.val());
            let val2 = Number(model.num2.val());
            model.result.val(operation(val1,val2));
        }
    };
    return model;
}