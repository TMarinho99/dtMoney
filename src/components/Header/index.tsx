import { useContext } from 'react'
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface HeadeerProps {
    onOpenNewTransactionModal: () => void;
    toggleTheme(): void;
}


export function Header({ onOpenNewTransactionModal, toggleTheme}: HeadeerProps) {
    const { colors, title } = useContext(ThemeContext)

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
                </button>
            </Content>
                <Switch
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor='#262d31'
                    onColor={colors.blue_light}
                />
        </Container>
    )
}