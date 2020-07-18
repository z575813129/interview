@test
class TestDecorator {
    // ...
}
function test(target) {
    target.show = true;
}
console.log(TestDecorator.show) // 输出 true