import './card.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function Card({id, title, tags, description}) {

    return (
        <Link to={`/projects/${id}`} className='card'>
            <div className="card-body d-flex flex-column justify-content-around">
                <h3 className='card-title'>{title}</h3>
                <div className='card__tags'>
                    {tags.slice(0, 4).map((tag, index) => {
                        return(
                            <span className='card__tag' key={index}>{tag}</span>
                        )
                    })}
                </div>

                <p className='card-text'>{description}</p>
                <Button variant="outline-primary" className='card__button'>
                    En savoir plus
                </Button>
            </div>
        </Link>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    tags: PropTypes.array,
    description: PropTypes.string
}
