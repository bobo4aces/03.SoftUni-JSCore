let expect = require("chai").expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let nuke = require("../06. ArmageDOM").nuke;

describe("ArmageDom task", () => {
    beforeEach(function () {
        document.body.innerHTML = `<body>
<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>
</body>
`
    });

    describe('testing nuke(selector1, selector2)',function () {
        it('should do nothing if the selectors are the same',function () {
            let oldBody=$('body').html();
            nuke('.target','.target');
            expect($('body').html()).to.be.equal(oldBody)
        });

        it('should do nothing if the second selector is omitted',function () {
            let oldBody=$('body').html();
            nuke('.target');
            expect($('body').html()).to.be.equal(oldBody)
        });

        it('should do nothing if one of the selectors is invalid',function () {
            let oldBody=$('body').html();
            nuke(5,'.target');
            expect($('body').html()).to.be.equal(oldBody)
        });

        it('should do nothing if the first selector is empty',function () {
            let oldBody=$('body').html();
            nuke('','.target');
            expect($('body').html()).to.be.equal(oldBody)
        });

        it('should do nothing if the second selector is empty',function () {
            let oldBody=$('body').html();
            nuke('.target','');
            expect($('body').html()).to.be.equal(oldBody)
        });

        it('should delete all nodes that match .target and .nested',function () {
            nuke('.target','.nested');
            expect($('.target').filter('.nested').length).to.be.equal(0);
        });

        it('should delete all nodes that match .target and span',function () {
            nuke('.target','span');
            expect($('.target').filter('span').length).to.be.equal(0);
        });

        it('should delete all nodes that match * :not(:has(*)) and span',function () {
            nuke('* :not(:has(*))','span');
            expect($('* :not(:has(*))').filter('span').length).to.be.equal(0);
        });

        it('should delete all nodes that match * :has(p) and div',function () {
            nuke('* :has(p)','div');
            expect($('* :has(p)').filter('div').length).to.be.equal(0);
        });

        it('should remove the first matched element if one of the selectors is an id',function () {
            let firstMatchedElement=$('div').filter('#target');
            nuke('#target','div');
            expect($('div').filter('#target').length).not.equal(firstMatchedElement)
        });
    });
});