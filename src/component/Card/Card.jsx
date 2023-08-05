import './card.scss';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function Card({id, title, tags, description}) {

    return (
        <HashLink to={`/projects/${id}#top`} className='card' >
            <div className="card__content">
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
            </div>
        </HashLink>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired
}
