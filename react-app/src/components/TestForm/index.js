import { useState } from 'react';

function ScrollingForm() {
    const [currentStage, setCurrentStage] = useState(1)

    const changeStageButton = (e) => {
        e.preventDefault()

        // console.log('hello')
        if (currentStage < 3) {
            setCurrentStage(currentStage + 1)
        }
    }
    const goBack = (e) => {
        e.preventDefault()
        if (currentStage > 1) {
            setCurrentStage(currentStage - 1)
        }
    }
    const content = () => {
        if (currentStage === 1) {
            return (
                <div>
                    < form >
                        <h2>Form 1</h2>
                        <div>
                            <label>Category</label>
                            <input type="text" />
                        </div>
                        <div>
                            <button onClick={changeStageButton}> Next: Description</button>
                        </div>
                    </form>
                </div >
            )
        }
        if (currentStage === 2) {
            return (
                <div>
                    < form >
                        <h2>Form 2</h2>
                        <div>
                            <label>Description</label>
                            <input type="text" />
                        </div>
                        <div>
                            <button onClick={changeStageButton}> Next: Countries</button>
                        </div>
                        <div>
                            <button onClick={goBack}> Back: Category</button>
                        </div>
                    </form>
                </div >
            )
        }
        if (currentStage === 3) {
            return (
                <div>
                    < form >
                        <h2>Form 3</h2>
                        <div>
                            <label>Select Country</label>
                            <input type="text" />
                        </div>
                        <div>
                            <button onClick={changeStageButton}> Save </button>
                        </div>
                        <div>
                            <button onClick={goBack}> Back: Description</button>
                        </div>
                    </form>
                </div >
            )
        }
    }
    return (
        <div>
            <h1>Create your project!</h1>
            {content()}
        </div>
    )
}

export default ScrollingForm
