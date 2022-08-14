let users = [
    {name:'Alex',age:26},
    {name:'Nikita',age:27}
]
export const getAll = (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json(users);
}

export const createUser = (req,res)=>{
    let name = req.body.name;
    res.header("Access-Control-Allow-Origin", "*");
    res.set('Access-Control-Allow-Origin', '*');
    let findElem = users.find(v=>{
        return v.name === name;
    })
    if(!findElem){
        users.push(req.body);
        res.status(201).json({created:true});  
    }
    else {
        res.status(400).json({created:false});
    }
}