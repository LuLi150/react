
export default function UserStatus({Status}){

    const statusColor = Status === 'Ativo' ? 'green' : 'gray';

    return (
        <h2 style={{color: statusColor}}>Status: {Status}</h2>
    );
}