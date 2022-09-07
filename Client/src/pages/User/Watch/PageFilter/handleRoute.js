const handleRoute= (slug,hang) =>{
    
    //let value= slug[0].toUpperCase() +   slug.slice(1);
    let key = ''
    let value =''
    const sex = [{'nam':'Nam'},{'nu':'Nữ'},{'tre-em':'Trẻ em'},{'cap-doi':'Cặp đôi'}]
    const enable= ((key,value)=>{
        const element = Array.from(document.getElementsByName(key))
        element.map((curent)=>{
            if( curent.id === value)
            curent.style = 'border-color: #498fef;color: #498fef;'
            
        })
    })
    if(hang)
    {
        key='Hãng'
        value = slug.charAt(0).toUpperCase() + slug.slice(1)
        enable(key,value)
    }
    sex.some((e)=>{
        const keys = Object.keys(e)
        const values = Object.values(e)
        if(keys[0]== slug)
        {
            key= 'Giới tính'
            value= values[0]
            enable(key,value)
        }
    })

    
    const keyWord =[
        {[key]:value},
    ]
    
            
    return keyWord
  
}

export default handleRoute