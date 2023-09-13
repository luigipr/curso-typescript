type Identities<I> =  I[]

type Identity = (string | number | number[] |string[])
//type Identities<Identity>


function identity (value: Identity) : Identity {
    return value;
}

console.log(identity(1)) // 1

console.log(identity(42)); // 42
console.log(identity("Hello")); // Hello
console.log(identity([1,2,3])); // [1, 2, 3]