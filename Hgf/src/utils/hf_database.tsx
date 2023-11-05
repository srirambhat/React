export type hf_Data = {
  _id: string;
  id: string;
  likes: number;
  private: boolean;
  downloads: number;
  tags: [...string[]];
  pipeline_tag: string;
  modelId: string;
};

export type rowData = {
  id: number;
  model: string;
  likes: number;
  downloads: number;
  pipeline_tag: string;
};

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
