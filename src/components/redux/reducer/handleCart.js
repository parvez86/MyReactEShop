const cart = []

const handleCart = (state, action) => {
    const product = action.payload;
    switch(action.type){
        case 'ADDITEM':
            let exist = state.find((x) => x.id === product.id);
            if (exist){
                return state.map(
                    (x) => x.id === product.id ? {...x, qty:x.qty++}:x
                )
            }else{
                return [...state, {
                    ...product,
                    qty: 1
                }]
            }
            break;
        
        case 'DELITEM':
            const exist1 = state.find((x) => x.id === product.id)
            if(exist1.qty === 1){
                state = state.filter((x) => x.id !== product.id)
            }else {
                return state.map((x) => 
                    x.id === product.id? {...x, qty:x.qty--}:x
                );
            }
            break;
        default:
            return state;
            break;
    }

}