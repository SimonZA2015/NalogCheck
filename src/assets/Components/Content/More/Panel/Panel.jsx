import React, {useState} from "react";
import Text from "../Text/Text";
import {textConfigs} from "../../../../configs/text-configs";
import Input from "../Input/Input";
import TextButton from "../TextButton/TextButton";
import Tags from "../Tags/Tags";
import ClosePanel from "../ClosePanel/ClosePanel";
import {storeConfigs} from "../../../../configs/store-configs";
import ResultCheckBox from "../ResultCheckBox/ResultCheckBox";
import BigButton from "../BigButton/BigButton";

import style from './Panel.module.css';

const Panel = (props) => {

    const [salary, setSalary] = useState('');
    const [errorSalary, setErrorSalary] = useState(false)
    const result = props.dispatch({type: storeConfigs.getResult});

    function calculateLocal() {
        if (salary.length > 0) {
            if (parseInt(salary) < 260000) {
                //set false error? if was show
                setErrorSalary(false);
                //request calculate store
                props.dispatch({
                    type: storeConfigs.calculate,
                    data: Number(salary),
                })
            } else {
                setErrorSalary(textConfigs.errorInputCount);
            }
        } else {
            //show input error
            setErrorSalary(textConfigs.errorInput);
        }
    }

    return (
        <div className={style.body}>
            <Text title={true} text={textConfigs.titlePanel}/>
            <Text hint={true} text={textConfigs.hintPanlel}/>
            <Text text={textConfigs.yourSalaryPanel}/>
            <Input
                type={'number'}
                value={salary}
                set={setSalary}
                error={errorSalary}
                hint={textConfigs.hintInputPanel}
            />
            <TextButton
                text={textConfigs.calculatePanel}
                onClick={calculateLocal}
            />
            {result ?
                result.map((data) => (
                    data ?
                        <ResultCheckBox active={true} text={data[0] + ' в ' + data[1] + ' год'}/> :
                        <ResultCheckBox active={false} text={''}/>
                ))
                : ''}

            <div style={{display: 'flex', width: '92%'}}>
                <Text text={textConfigs.tagsQuestionPanel}/>
                <Tags text={'Расчитать'} active={true}/>
                <Tags text={'Вычесть'}/>
            </div>
            <BigButton text={textConfigs.addPanel} style={{position: 'absolute', bottom: '10px', left: '5%', right: '5%'}} />

            <ClosePanel onClick={() => props.dispatch({type: storeConfigs.closePanel})}/>
        </div>
    )
};

export default Panel;