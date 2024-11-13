// import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
// import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"
// import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
import { AppProduct } from "./components/AppProduct/AppProduct";
import { FormComponent } from "./components/FormComponent/FormComponent";

export const App = () => { //Siempre tengo que retornar un solo elemento
  return ( //Si quisiese devolver más de uno, lo envuelvo en un div/fragment
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2vh',
      }}>
    {/* <MiPrimerComponent
    text={"Texto desde propiedades"}
    color="red"
    fontSize={5}
    />
    <ComponentCounter />
    <ComponentUseEffect /> */}
    {/* <FormComponent /> */}
    
      <AppProduct />
    
    </div>
  );
};
