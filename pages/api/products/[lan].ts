import { NextApiRequest, NextApiResponse } from "next";
import { products } from "../db";

export default function handler(req : NextApiRequest, res : NextApiResponse<typeof products>) {
    const { lan } = req.query;
    res.status(200).json(products)
    res.end(`products: ${lan}` )
  }