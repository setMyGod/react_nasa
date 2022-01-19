import * as url from "url";

export interface IShip{

    mission_name: string;
    launch_date_local: string;
    launch_site:IlauchSite
    links:Ilinks
    rocket:IRocket
    second_stage:ISecondStage
}

export interface IlauchSite{
    site_name_long:string;

}
export interface Ilinks{

    article_link: null,
    video_link: string,

}
export interface IRocket {

    rocket_name:string;
    first_stage: {
        cores: [
            {
                flight: number;
                core: {
                    reuse_count: number;
                    status: unknown
                }
            }
        ]
    },
}
export interface ISecondStage{

    payloads: [
        {
            payload_type: string,
            payload_mass_kg: number,
            payload_mass_lbs: number
        }
    ]

}