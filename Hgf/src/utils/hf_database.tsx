export type hf_Data = {
  _id: string;
  id: string;
  author: string;
  lastModified: string; 
  likes: number;
  private_flag: number;
  sha: string;
  downloads: number;
  tags: [...string[]];
  pipeline_tag: string;
  libraryname: string;
  modelId: string;
  siblings: [{
    rfilename: string;  
  }];
};

export type rowData = {
  id: number;  
  model_name: string;
  lastModified: string;
  likes: number;
  private_flag: number;
  downloads: number;
  pipeline_tag: string;
  
};

export const TaskTypes = [
  "all"
];

/*
interface hf_data =[
    {
        "_id": "621ffdc036468d709f174328",
        "id": "albert-base-v1",
        "likes": 3,
        "private": false,
        "downloads": 38281,
        "tags": [
            "transformers",
            "pytorch",
            "tf",
            "safetensors",
            "albert",
            "fill-mask",
            "exbert",
            "en",
            "dataset:bookcorpus",
            "dataset:wikipedia",
            "arxiv:1909.11942",
            "license:apache-2.0",
            "autotrain_compatible",
            "endpoints_compatible",
            "has_space",
            "region:us"
        ],
        "pipeline_tag": "fill-mask",
        "modelId": "albert-base-v1"
    },
];

*/

/*
        "_id": "621ffdc136468d709f17cdb3",
        "id": "jonatasgrosman/wav2vec2-large-xlsr-53-english",
        "author": "jonatasgrosman",
        "lastModified": "2023-03-25T10:56:55.000Z",
        "likes": 301,
        "private": false,
        "sha": "569a6236e92bd5f7652a0420bfe9bb94c5664080",
        "downloads": 76557643,
        "tags": [
            "transformers",
            "pytorch",
            "jax",
            "safetensors",
            "wav2vec2",
            "automatic-speech-recognition",
            "audio",
            "en",
            "hf-asr-leaderboard",
            "mozilla-foundation/common_voice_6_0",
            "robust-speech-event",
            "speech",
            "xlsr-fine-tuning-week",
            "dataset:common_voice",
            "dataset:mozilla-foundation/common_voice_6_0",
            "license:apache-2.0",
            "model-index",
            "endpoints_compatible",
            "has_space",
            "region:us"
        ],
        "pipeline_tag": "automatic-speech-recognition",
        "library_name": "transformers",
        "siblings": [
            {
                "rfilename": ".gitattributes"
            },
            {
                "rfilename": "README.md"
            },
            {
                "rfilename": "alphabet.json"
            },
            {
                "rfilename": "config.json"
            },
            {
                "rfilename": "eval.py"
            },
            {
                "rfilename": "flax_model.msgpack"
            },
            {
                "rfilename": "full_eval.sh"
            },
            {
                "rfilename": "language_model/attrs.json"
            },
            {
                "rfilename": "language_model/lm.binary"
            },
            {
                "rfilename": "language_model/unigrams.txt"
            },
            {
                "rfilename": "log_mozilla-foundation_common_voice_6_0_en_test_predictions.txt"
            },
            {
                "rfilename": "log_mozilla-foundation_common_voice_6_0_en_test_predictions_greedy.txt"
            },
            {
                "rfilename": "log_mozilla-foundation_common_voice_6_0_en_test_targets.txt"
            },
            {
                "rfilename": "log_speech-recognition-community-v2_dev_data_en_validation_predictions.txt"
            },
            {
                "rfilename": "log_speech-recognition-community-v2_dev_data_en_validation_predictions_greedy.txt"
            },
            {
                "rfilename": "log_speech-recognition-community-v2_dev_data_en_validation_targets.txt"
            },
            {
                "rfilename": "model.safetensors"
            },
            {
                "rfilename": "mozilla-foundation_common_voice_6_0_en_test_eval_results.txt"
            },
            {
                "rfilename": "mozilla-foundation_common_voice_6_0_en_test_eval_results_greedy.txt"
            },
            {
                "rfilename": "preprocessor_config.json"
            },
            {
                "rfilename": "pytorch_model.bin"
            },
            {
                "rfilename": "special_tokens_map.json"
            },
            {
                "rfilename": "speech-recognition-community-v2_dev_data_en_validation_eval_results.txt"
            },
            {
                "rfilename": "speech-recognition-community-v2_dev_data_en_validation_eval_results_greedy.txt"
            },
            {
                "rfilename": "vocab.json"
            }
        ],
        "modelId": "jonatasgrosman/wav2vec2-large-xlsr-53-english"
    },
*/