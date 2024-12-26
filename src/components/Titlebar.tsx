import { FormControlLabel, FormGroup } from '@mui/material';
import Switch from '@mui/material/Switch';
import '../App.css';
import { MaterialUISwitch } from '../assets/buttons';

interface Props{
    setTheme: React.Dispatch<React.SetStateAction<string>>,
    theme: string
}
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const Titlebar: React.FC<Props> = ({setTheme, theme})=>{
    const handleTheme = (e: React.MouseEvent<HTMLElement>)=>{
        setTheme(theme==="dark"?"light":"dark");
        // e.preventDefault();
        // e.stopPropagation();
    }
    return(
        <div className="text-center flex flex-col bg-slate-500 text-black px-5 py-3.5 dark:bg-slate-900 dark:text-gray-800">
            <div className="lexend-zetta text-3xl">Omkar Panda </div>
            <div className='text-lg'>Software Developer</div>
            <div>
                {/* <FormGroup>
                    <FormControlLabel
                    control = {<MaterialUISwitch sx={{m: 1}} defaultChecked onClick={handleTheme}/>}
                    label=""
                    
                    />
                </FormGroup> */}
                {/* <FormGroup>       
                    <FormControlLabel
                   control = { <MaterialUISwitch sx={{m: 1}} onClick={handleTheme}/>}
                    label=""
                    
                    />
                </FormGroup> */}
                <div className="text-left">
                <Switch {...label} onClick={handleTheme} defaultChecked color='default'/>
                </div>
            </div>
        </div>
    )
}
