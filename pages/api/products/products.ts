import { NextApiRequest, NextApiResponse } from "next";
import { products } from "../db";

export default function handler(req : NextApiRequest, res : NextApiResponse<typeof products>) {
    res.status(200).json(products)
  }