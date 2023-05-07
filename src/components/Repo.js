import classes from './Repo.module.css';

const Repos = (props) => {
    return <div className={classes.container}>
        {props.name && <p>Name :- {props.name}</p>}
        {props.description && <p>Description :- {props.description}</p>}
        {props.url && <p>URL :- {props.url}</p>}
    </div>
}

export default Repos;