# NOTES:

## Testing tools and docs

* [Vue testing handbook](https://lmiller1990.github.io/vue-testing-handbook/#what-is-this-guide)
* [Vue Test Utils](https://vue-test-utils.vuejs.org/api/options.html#context)
     for mount/shallowMount Vue/Vuex components
* [Vuex testing doc](https://vuex.vuejs.org/guide/testing.html)
* [Expect assertion library](https://jestjs.io/docs/en/expect) is now part of the Jest project
* [Sinon spies/subs/mocks library](https://sinonjs.org/releases/v7.5.0/stubs/)

## Test files

* A test file must end with `.spec.js`
* An `@` is a webpack `import` alias for the root directory of the git project
* Use `import hlp from '@/tests/Client/testHelpers';` to gain access to the testing helper functions

## Testing Vuex Stores

For the most part, stores can be unit tested as plain javascript objects, although see below for __actions__

### state and mutations

Testing __state__ and __mutations__ in general is not very interesting.
Perhaps an initial state test would be good, and a test for a mutation if it
does anything other than set a single state property.

### getters

Test __getters__ as plain javascript objects, mocking state and other getters as plain objects as well.

### actions

We are testing actions a little more like Feature tests than Unit tests.  That
is, we instantiate the Vuex store and test it fully, only mocking a few things.
So the action will change it's acutal state and call it's actual getters and
mutations.

Most actions are async, so there is an whole lot of that stuff you have to pay attention to...

In general, we mock rootState and rootGetters. However, how we do this is
affected by store namespacing.  Currently we do not namespace our stores, so we
need to create any rootState/rootGetters as state/getters.  For example, to
create the applicationId rootGetter:  

```
        let s = hlp.clone(purchaseStore);
        s.getters.applicationId = () => applicationId;
        store = new Vuex.Store(s);
```

The reason for this is because, without namespaceing, Vue mashes all stores
into single global namespace essentially creating one single store. Therefore,
__getters__ is equivalent to __rootGetters__. I assume rootGetters is simply an
alias to getters.

Once/If we implement namespaced stores, we would create the root getters for
the given store. Something like this:  

```
     const application = {
         getters: {
             applicationId: () => 1111,
         }
     };
     const proposal = {
         getters: {
             proposalId: () => 2222,
         }
     };
     store = new Vuex.Store({
         modules: {
             application: application,
             proposal: proposal,
             purchase: hlp.clone(purchaseStore)
         }
     });
```

## Vue Components

Vue stores need to be mounted/shallowMounted using the vue-test-utils stuff.
This means, we have to instantiate a Vue instance (and use Vuex if the
components uses any Vuex stuff), then mount it to a localVue instance. See one
of the pages .spec.js files for an example.

Use __shallowMount__ whenever possible. This will automatically mock any
components used by the component under test.

Test for behavior, not implementation!  That is, test what a user would see,
not how the component does it.  For example, enter some text in an input, click
the button and make sure you *see* what you expect.  Don't try to test that a
particular computed got set and some specific data changed.  Those are
implementation details, and our test would break if we ever refactor the
component to use a prop instead of the computed/data property.



