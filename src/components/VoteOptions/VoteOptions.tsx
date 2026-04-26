import css from './VoteOptions.module.css';
import { VoteType } from '../../types/votes';
interface VoteOptionsProps{
    onVote: (type: VoteType) => void;
    onReset: () => void;
    canReset: boolean;
}
export defaultfunction VoteOptions({
    onVote,
    onReset,
    canReset,
}: VoteOptionsProps){
    return (
        <div className={css.container}>
            <button className={css.button} onClick={() => onVotr('good')}>Good</button>
            <button className={css.button} onClick={() => onVotr('neutral')}>Neutral</button>
            <button className={css.button} onClick={() => onVotr('bad')}>Bad</button>
            {canReset && (
                <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>
            )}
        </div>
    );
}