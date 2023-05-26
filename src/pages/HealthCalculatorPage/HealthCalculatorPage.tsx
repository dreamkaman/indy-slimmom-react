import CalculateCaloriesForm from 'components/CalculateCaloriesForm';

import s from './HealthCalculatorPage.module.css';

const HealthCalculatorPage = () => {
    return <section className={s.calculatorBg}>
        <div className='container'>
            <CalculateCaloriesForm />
        </div>
    </section>

}

export default HealthCalculatorPage;