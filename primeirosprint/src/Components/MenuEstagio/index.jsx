// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import StepContent from "@mui/material/StepContent";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";

// const steps = [
//   {
//     label: "Cadastre-se",
//     description: `Por favor, escreva seu nome e e-mail`,
//   },
//   {
//     label: "Escolha uma senha",
//     description: "Escolha uma senha segura",
//   },
//   {
//     label: "Cadastro realizado com sucesso",
//     description: `E-mail e senha cadastro com sucesso`,
//   },
// ];

// export default function VerticalLinearStepper() {
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <Box sx={{ maxWidth: 400 }}>
//       <Stepper activeStep={activeStep} orientation="vertical">
//         {steps.map((step, index) => (
//           <Step key={step.label}>
//             <StepLabel
//               sx={{ color: "green" }}
//               optional={
//                 index === 2 ? (
//                   <Typography variant="caption">Last step</Typography>
//                 ) : null
//               }
//             >
//               {step.label}
//             </StepLabel>
//             <StepContent>
//               <Typography>{step.description}</Typography>
//             </StepContent>
//           </Step>
//         ))}
//       </Stepper>
//       {activeStep === steps.length && (
//         <Paper square elevation={0} sx={{ p: 3 }}>
//           <Typography>All steps completed - you&apos;re finished</Typography>
//           <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
//             Reset
//           </Button>
//         </Paper>
//       )}
//     </Box>
//   );
// }

import React from "react";
import "./style.css";
import bolaVerdeMenu from "../../assets/bola-menu-verde.svg";
import bolaMenu from "../../assets/bola-menu.svg";
import linhaMenu from "../../assets/linha-menu.svg";

function MenuEstagio({estagioAtual}){  

  return (
    <div>
          <div className="estagio">
            <div className="icone">
              <img src={bolaVerdeMenu} alt="circulo-verde" />
              <img src={linhaMenu} alt="linha-verde" />
             
            </div>
    
            <div className="informacao">
            <span className="titulo-menu"> Cadastre-se</span>
              <p className="mensagem-menu"> Por favor, escreva seu nome e e-mail</p>
            </div>
          </div>


          <div className={`estagio ${estagioAtual >= 1 ? <img src={bolaVerdeMenu}/> : <img src={bolaMenu}/>}`} >
            <div className="icone">
              <img className="icone" src={bolaMenu} alt="circulo-verde" />
              <img src={linhaMenu} alt="linha-verde" />
            </div>

            <div className="informacao">
              <span className="titulo-menu"> Escolha uma senha</span>
              <p className="mensagem-menu"> Escolha uma senha segura</p>
            </div>
          </div>


          <div className={`estagio ${estagioAtual >= 2 ? <img src={bolaVerdeMenu}/> : <img src={bolaMenu}/>}`}>
          <div className="icone">
            <img src={bolaMenu} alt="circulo-verde" />  
          </div>

            <div className="informacao">
              <span className="titulo-menu"> Cadastro realizado com sucesso</span>
              <p className="mensagem-menu"> E-mail e senha cadastrados com sucesso</p>
            </div>
          </div>
    </div>
  );
}
export default MenuEstagio;