import reducer from './auth';

describe(' auth reducer',()=>{
    it('should return the initial state',()=>{
        expect(reducer(undefined,{})).toEqual({
                token: null,
                userId: null,
                error: null,
                loading: false,
                authRedirectPath: '/'
        })
    })
})