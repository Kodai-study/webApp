import Myform from './Myform';
import DB from './DB'

export default async function App(){

    const re = await DB();
    const allPropertiesStrings = re.map(item => {
      const keys = Object.keys(item);
      return keys.map(key => `${key}: ${item[key]}`).join(', ');
    });

    return(
        <>
        <Myform></Myform>
        {allPropertiesStrings}
        </>
    );
}