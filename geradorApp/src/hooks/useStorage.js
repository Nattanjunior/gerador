import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = ()=>{
    // Buscar os itens salvos
    const getItem = async (key)=>{
        try {
            const passwords = await AsyncStorage.getItem(key)
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.log("ERRO AO BUSCAR!!",error)
            return [];
        }
    }

    // Salvar um item no storage
    const saveItem = async (key,value) =>{
        try {
            let passSave = await getItem(key)
            passSave.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passSave)) // salvando o array com: senhas que já estão salvas e adicionando novas senhas em forma de string.
            
        } catch (error) {
            console.log("ERRO AO SALVAR!!!",error)
        }
    }

    // Remover algo do storage
    const removeItem = async (key, item) =>{
        try {
            let passRemove = await getItem(key);

            let myPassword = passRemove.filter((passwords)=>{
                return (passwords !== item)
            })

            await AsyncStorage.setItem(key,JSON.stringify(myPassword))
            return myPassword
            
        } catch (error) {
            console.log("ERRO AO DELETAR!!!",error)
        }
    }

    return{
        getItem,
        saveItem,
        removeItem,
    }
}

export default useStorage





// a constante password: busca no AsyncStorage a nossa propriedade key, que e a identificação(id) do parãmetro, basicamente, são os ids das senhas já salvas no AsyncStorage, ids não podem se repetir.

// JSON.parse: estamos convertendo algo em um array, nesse projeto, estamos colocando as senhas dentro de um array, e retornando elas. Caso a constante não ache nenhuma key(id), ela retornará um [] vázio.
