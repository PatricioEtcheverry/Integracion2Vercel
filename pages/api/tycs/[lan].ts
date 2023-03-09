import { NextApiRequest, NextApiResponse } from "next";
import { tycs } from "../db";

export default function handler(req : NextApiRequest, res : NextApiResponse<typeof tycs>) {
    const { lan } = req.query;
    res.status(200).json(tycs)
    res.end(`products: ${lan}` )
  }