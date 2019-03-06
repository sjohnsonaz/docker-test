import Sierra, { Controller, route, Context } from 'sierra';

class TestController extends Controller {
    @route('get')
    async get(context: Context, value: any) {
        return true
    }
}

let application = new Sierra();
application.addController(new TestController());
application.init();
application.listen(80);