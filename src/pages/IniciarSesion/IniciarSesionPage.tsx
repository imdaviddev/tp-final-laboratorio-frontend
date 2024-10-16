import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/HeaderComponent/Header';
import { FormContainer, LabelForm, InputForm, ContainerPadre, DescHijo } from '../ComponentsUI';
import { SubmitButton } from '../ComponentsUI/Botones';

// Componente de inicio de sesión
const IniciarSesionPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Función para manejar el inicio de sesión
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/usuarios');
      const usuarios = await response.json();

      const user = usuarios.find((u: any) => u.nombre_usuario === username && u.password === password);

      if (user) {
        switch (user.rol) {
          case 'ADMINISTRADOR':
            navigate('/administracion');  
            break;
          case 'SUPERVISOR':
            navigate('/supervision');  
            break;
          case 'TECNICO_MANTENIMIENTO':
            navigate('/mantenimiento'); 
            break;
          case 'CONDUCTOR':
            navigate('/conductor');  
            break;
          default:
            navigate('/');  
        }
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error en el servidor, intenta nuevamente');
    }
  };

  return (
    <>
      <Header rol="Cliente"></Header>
      <ContainerPadre>
        <FormContainer onSubmit={handleSubmit}>
          <DescHijo>Ingresa tus datos para iniciar sesión</DescHijo>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <LabelForm>Nombre de Usuario</LabelForm>
          <InputForm
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingresa tu usuario"
            required
          />

          <LabelForm>Contraseña</LabelForm>
          <InputForm
            type="password"
            id="contrasenia"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            required
          />

          <SubmitButton type="submit">Iniciar Sesión</SubmitButton>
        </FormContainer>
      </ContainerPadre>
    </>
  );
};

export default IniciarSesionPage;
