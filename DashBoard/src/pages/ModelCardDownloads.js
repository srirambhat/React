import '../Index.css';
import { useState, React } from 'react';
import { v4 as uuidv4 } from 'uuid';

const styles = {
    thead: {
        backgroundColor: 'skyblue',
    },
    td: {
        padding: '10px',
        border: 'solid 1px black',
    },
};

function ModelCardDownloads() {
    const [models, setModels] = useState([
        {
            PipelineRunID: 1,
            ModelName: 'falcon-80b',
            ModelLicense: 'apache',
            ModelPipeLineTags: ['tag1', 'tag2', 'tag3'],
            ModelImportedFrom: 'Huggingface',
            ModelAutomationOwner: 'Sriram',

            ModelAutomationStatus: {
                stage: 'Complete',
                start_time: '1:00:00',
                end_time: '7:00:00',
                start_date: '07-12-2023',
                end_date: '07-12-2023',
                status: 0,
                error_string: '',
                error_number: 0,
            },
            ImportStatus: {
                stage: 'import',
                start_time: '1:00:00',
                end_time: '2:00:00',
                start_date: '07-12-2023',
                end_date: '07-12-2023',
                status: 0,
                error_string: '',
                error_number: 0,
            },
            FinetuneStatus: {
                stage: 'Finetune',
                start_time: '2:00:00',
                end_time: '3:00:00',
                start_date: '07-12-2023',
                end_date: '07-12-2023',
                status: 1,
                error_string: 'Finetune Failed',
                error_number: 10000,
            },
            EvalStatus: {
                stage: 'Evaluation',
                start_time: '3:00:00',
                end_time: '4:00:00',
                start_date: '07-12-2023',
                end_date: '07-12-2023',
                status: 2,
                error_string: 'Skip',
                error_number: 0,
            },
            DeploymentStatus: {
                stage: 'Deployment',
                start_time: '5:00:00',
                end_time: '6:00:00',
                start_date: '07-12-2023',
                end_date: '07-13-2023',
                status: 0,
                error_string: '',
                error_number: 0,
            },
            BatchDeploymentStatus: {
                stage: 'Batch Deployment',
                start_time: '5:00:00',
                end_time: '6:00:00',
                start_date: '07-12-2023',
                end_date: '07-12-2023',
                status: 0,
                error_string: '',
                error_number: 0,
            },
        },
    ]);

    console.log('We are about to list the employee');
    const showModels = true;
    return (
        <>
            <div className="">
                {console.log('inside the return')}
                {showModels ? (
                    <>
                        <tbody>
                            <tr style={styles.thead}>
                                <th className="px-3">ID</th>
                                <th className="px-2">Name</th>
                                <th className="px-2">License</th>
                                <th className="px-2">Pipeline Tags</th>
                                <th className="px-2">ImportedFrom</th>
                                <th className="px-2">Author</th>
                            </tr>
                            {models.map((model, index) => (
                                <tr key={index}>
                                    <td style={styles.td}>
                                        {model.PipelineRunID}
                                    </td>
                                    <td style={styles.td}>{model.ModelName}</td>
                                    <td style={styles.td}>
                                        {model.ModelLicense}
                                    </td>
                                    <td style={styles.td}>
                                        {model.ModelPipeLineTags.map(
                                            (tag, index) => (
                                                <span key={index}>
                                                    {' ' + tag}
                                                </span>
                                            )
                                        )}
                                    </td>
                                    <td style={styles.td}>
                                        {model.ModelImportedFrom}
                                    </td>
                                    <td style={styles.td}>
                                        {model.ModelAutomationOwner}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </>
                ) : (
                    <p> You cannot see the employee</p>
                )}
            </div>
        </>
    );
}

export default ModelCardDownloads;
