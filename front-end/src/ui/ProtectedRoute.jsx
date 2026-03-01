import styled from 'styled-components'
import { useUser } from '../features/authenthication/useUser'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`

function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    


    const userHook = useUser()

    
    const { isLoading, isAuthenticated } = userHook


    useEffect(() => {
        
        if (!isAuthenticated && !isLoading) {
       
            navigate('/login')
        }
    }, [isAuthenticated, isLoading, navigate])

    if (isLoading) {

        return (
            <FullPage>
                <Spinner />
            </FullPage>
        )
    }

    if (isAuthenticated) return children
    
    return null
}

export default ProtectedRoute